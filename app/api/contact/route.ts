import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message, token } = await request.json();

    // 1. Verify Turnstile token
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret: turnstileSecret, response: token }),
    });
    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      console.error('Turnstile verification failed:', verifyData);
      return NextResponse.json(
        { error: 'Verification failed' },
        { status: 400 }
      );
    }

    // 2. Send email via Zeabur Email API
    const res = await fetch('https://api.zeabur.com/api/v1/zsend/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.ZEABUR_EMAIL_API_KEY}`,
      },
      body: JSON.stringify({
        from: `info@leverag.xyz`,
        to: [process.env.MY_MAIL],
        replyTo: email,
        subject: `New Contact: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #2563eb;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error('Zeabur Email API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
