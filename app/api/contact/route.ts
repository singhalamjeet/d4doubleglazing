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

        // Send email using Brevo (Sendinblue)
        const brevoApiKey = process.env.BREVO_API_KEY;

        if (!brevoApiKey) {
            console.error('BREVO_API_KEY not configured');
            return Response.json(
                { error: 'Email service not configured' },
                { status: 500 }
            );
        }

        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': brevoApiKey,
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                sender: {
                    name: 'D4 Double Glazing Website',
                    email: 'noreply@d4doubleglazing.com'
                },
                to: [
                    {
                        email: 'info@d4doubleglazing.com',
                        name: 'D4 Double Glazing'
                    }
                ],
                subject: `New Quote Request from ${name}`,
                htmlContent: `
                    <html>
                        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                            <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
                                <h2 style="color: #2563eb; border-bottom: 3px solid #2563eb; padding-bottom: 10px;">New Contact Form Submission</h2>
                                
                                <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                                    <p style="margin: 10px 0;"><strong style="color: #1f2937;">Name:</strong> ${name}</p>
                                    <p style="margin: 10px 0;"><strong style="color: #1f2937;">Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
                                    <p style="margin: 10px 0;"><strong style="color: #1f2937;">Phone:</strong> <a href="tel:${phone}" style="color: #2563eb;">${phone}</a></p>
                                </div>
                                
                                <div style="background-color: white; padding: 20px; border-radius: 8px;">
                                    <p style="margin: 0 0 10px 0;"><strong style="color: #1f2937;">Message:</strong></p>
                                    <p style="margin: 0; white-space: pre-wrap;">${message}</p>
                                </div>
                                
                                <p style="margin-top: 20px; font-size: 12px; color: #6b7280;">
                                    This email was sent from the D4 Double Glazing contact form at ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}
                                </p>
                            </div>
                        </body>
                    </html>
                `,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Brevo API error:', errorData);
            throw new Error('Failed to send email via Brevo');
        }

        console.log('Email sent successfully via Brevo');

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
