import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, message } = body;

        // Validate required fields
        if (!name || !email || !phone || !message) {
            return Response.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // TODO: Configure email service
        // Options:
        // 1. Resend (recommended) - https://resend.com
        // 2. SendGrid - https://sendgrid.com
        // 3. Nodemailer with SMTP

        // Example with Resend (uncomment when configured):
        /*
        const { Resend } = require('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
            from: 'D4 Double Glazing <noreply@d4doubleglazing.com>',
            to: 'info@d4doubleglazing.com',
            subject: `New Quote Request from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });
        */

        // For now, just log the data (remove this in production)
        console.log('Contact form submission:', { name, email, phone, message });

        return Response.json(
            { message: 'Message sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return Response.json(
            { error: 'Failed to send message' },
            { status: 500 }
        );
    }
}
