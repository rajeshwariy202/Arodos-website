// const emailBtn = document.querySelector("#emailBtn")

/**   
 * Sends an email using the external email service API
 * 
 * @async
 * @function sendEmail
 * @param {Object} props - The email configuration object
 * @param {{name: string, email: string}[]} props.sendTo - Array of recipient objects with name and email
 * @param {string} props.subject - The email subject line
 * @param {string} props.htmlPart - The HTML content of the email
 * @returns {Promise<any>} The response data from the email service API
 *
 * @example
 * const result = await sendEmail({
 *   sendTo: [{name: "John Doe", email: "user@example.com"}],
 *   subject: "Welcome!",
 *   htmlPart: "<h1>Hello World</h1>"
 * });
 */
async function sendEmail(props) {
	const { sendTo, subject, htmlpart } = props;
	const body = {
		from: {
			name: "Arodos",
			email: "noreply@arodos.com",
		},
		to: sendTo,
		subject: subject,
		htmlpart: htmlpart,
	};

	try {
		const res = await fetch("https://send-email-api-v2.backendservices.in", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});

		if (!res.ok) {
			console.log(`HTTP error! status: ${res.status}`);
			return null;
		}

		const data = await res.json();
		return { data };
	} catch (error) {
		console.log("Could not send email");
		return null;
	}
}

/**
 * Generates an HTML email template for contact form submissions.
 *
 * Creates a professionally styled email template with a red gradient header,
 * contact information section, and message content area. The template includes
 * responsive design elements and modern styling with shadows, gradients, and
 * rounded corners.
 *
 * @param {string} name - The full name of the person submitting the contact form
 * @param {string} email - The email address of the person submitting the form
 * @param {string} message - The message content from the contact form
 * @returns {string} Complete HTML email template as a string with inline CSS styling
 *
 * @example
 * const emailHTML = formSubmitTemplate(
 *   "John Doe",
 *   "john.doe@example.com",
 *   "Hello, I'm interested in your services."
 * );
 */
const formSubmitTemplate = (name, email, message) => {
	return `
    <div style="
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            max-width: 1080px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 20px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
            overflow: hidden;
            border: 2px solid #f0f0f0;
        ">
	<!-- Header -->
	<header style="
            background: linear-gradient(135deg, #FF0000 0%, #bf0000 100%);
            padding: 40px 30px;
            text-align: center;
            position: relative;
            ">
		<div style="
                background: rgba(255, 255, 255, 0.1);
                border-radius: 50%;
                width: 80px;
                height: 80px;
                margin: 0 auto 20px auto;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 32px;
            ">
			📧
		</div>
		<h1 style="
                color: #ffffff;
                font-size: 32px;
                font-weight: 600;
                margin: 0 0 10px 0;
                letter-spacing: -0.5px;
            ">
			New Contact Message
		</h1>
		<p style="
                color: rgba(255, 255, 255, 0.9);
                font-size: 18px;
                margin: 0;
                font-weight: 300;
            ">
			You have received a new message from your website
		</p>
	</header>

	<!-- Main Content -->
	<div style="padding: 45px 35px;">
		<!-- Message Details Card -->
		<div style="
                background: linear-gradient(135deg, #f8f9ff 0%, #f0f2ff 100%);
                border: 2px solid #e6e8ff;
                border-radius: 18px;
                padding: 35px;
                margin-bottom: 30px;
            ">
			<h2 style="
                    color: #4c51bf;
                    font-size: 20px;
                    font-weight: 600;
                    margin: 0 0 25px 0;
                    border-bottom: 2px solid #e6e8ff;
                    padding-bottom: 10px;
                ">
				Contact Information
			</h2>

			<div style="margin-bottom: 20px;">
				<label style="
                        display: block;
                        font-size: 14px;
                        font-weight: 600;
                        color: #6b7280;
                        margin-bottom: 8px;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                    ">
                        Full Name
                    </label>
				<p style="
                        font-size: 18px;
                        color: #1f2937;
                        margin: 0;
                        padding: 12px 16px;
                        background-color: #ffffff;
                        border-radius: 10px;
                        border: 1px solid #d1d5db;
                        font-weight: 500;
                    ">
					${name}
				</p>
			</div>

			<div style="margin-bottom: 20px;">
				<label style="
                        display: block;
                        font-size: 14px;
                        font-weight: 600;
                        color: #6b7280;
                        margin-bottom: 8px;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                    ">
                        Email Address
                    </label>
				<p style="
                        font-size: 18px;
                        color: #1f2937;
                        margin: 0;
                        padding: 12px 16px;
                        background-color: #ffffff;
                        border-radius: 10px;
                        border: 1px solid #d1d5db;
                        font-weight: 500;
                    ">
					<a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
				</p>
			</div>
		</div>

		<!-- Message Content -->
		<div style="
                background: linear-gradient(135deg, #ffeded 0%, #ffeded 100%);
                border: 2px solid #FF0000;
                border-radius: 18px;
                padding: 35px;
                margin-bottom: 30px;
            ">
			<h3 style="
                    color: #92400e;
                    font-size: 20px;
                    font-weight: 600;
                    margin: 0 0 20px 0;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                ">
				💬 Message Content
			</h3>
			<div style="
                    background-color: #ffffff;
                    border-radius: 12px;
                    padding: 25px;
                    border: 1px solid #fed7aa;
                    min-height: 120px;
                ">
				<p style="
                        font-size: 16px;
                        color: #374151;
                        margin: 0;
                        line-height: 1.7;
                    ">
                    ${message}
				</p>
			</div>
		</div>
	</div>
</div>
    `;
};

// Example usage
/*
const emailHTML = formSubmitTemplate(
  "John Doe",
  "john.doe@example.com",
  "Hello, I'm interested in your services."
);

sendEmail({
  sendTo: [{ name: "John Doe", email: "john.doe@example.com" }],
  subject: "New Message from Contact Form",
  html: emailHTML
});
*/

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent reload

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Create HTML template
    const htmlContent = formSubmitTemplate(name, email, message);

    const res = await sendEmail({
      sendTo: [{ name:"Rajeshwari", email: "rajeshwariy202@gmail.com" },{ name:"Sazzadur", email: "ssasazzadur000@gmail.com" }, {name:"Abhijith",email:"abhijit.barman8@gmail.com"}], // ✅ Your target email here
      subject: "New Message from Website Contact Form",
      htmlpart: htmlContent,
    });

    

    if (res && res.data) {
      alert("✅ Message sent successfully!");
      form.reset();
    } else {
      alert("❌ Failed to send message. Please try again.");
    }
  });
});

// header mobile functionality 

  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });



//  Skeleton loader

document.addEventListener('DOMContentLoaded', () => {
    // Check if connection is slow
    function isSlowConnection() {
        const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        
        if (conn) {
            // Consider slow if using 2G or slow-2G
            if (['slow-2g', '2g'].includes(conn.effectiveType)) {
                return true;
            }
            
            // Consider slow if downlink is less than 0.5 Mbps
            if (conn.downlink < 0.5) {
                return true;
            }
        }
        
        // For testing purposes, always show skeleton loader
        return true;
    }

    // Handle skeleton loader
    const fullPageSkeletonOverlay = document.getElementById('full-page-skeleton-overlay');
    const actualPageContent = document.getElementById('actual-page-content');
    
    if (fullPageSkeletonOverlay && actualPageContent) {
        // Always show skeleton initially
        fullPageSkeletonOverlay.style.display = 'block';
        
        // Hide skeleton and show content when page is loaded
        window.addEventListener('load', () => {
            setTimeout(() => {
                fullPageSkeletonOverlay.style.opacity = '0';
                setTimeout(() => {
                    fullPageSkeletonOverlay.style.display = 'none';
                    actualPageContent.style.display = 'block';
                    actualPageContent.style.opacity = '1';
                }, 300);
            }, 1000); // Delay for demonstration purposes
        });
        
        // Fallback if load event doesn't fire
        setTimeout(() => {
            if (actualPageContent.style.opacity !== '1') {
                fullPageSkeletonOverlay.style.opacity = '0';
                setTimeout(() => {
                    fullPageSkeletonOverlay.style.display = 'none';
                    actualPageContent.style.display = 'block';
                    actualPageContent.style.opacity = '1';
                }, 300);
            }
        }, 3000);
    }

    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

    if (mobileMenuButton && mobileMenu && hamburgerIcon && closeIcon) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            hamburgerIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });
    }
});



// We've already implemented the skeleton loader functionality above
// No need for duplicate code