// --- Chatbot Logic (Conceptual Module 5: Chatbot) ---
const Chatbot = (function() {
  const toggleButton = document.getElementById('chatbot-toggle-button');
  const popup = document.getElementById('chatbot-popup');
  const closeButton = document.getElementById('chatbot-close-button');
  const messagesContainer = document.getElementById('chatbot-messages');
  const inputField = document.getElementById('chatbot-input');
  const sendButton = document.getElementById('chatbot-send-button');

  function toggleChatbot() {
    if(popup) popup.classList.toggle('show');
  }

  function closeChatbot() {
    if(popup) popup.classList.remove('show');
  }

  function addMessage(text, sender) { // sender can be 'user' or 'bot'
    if (!messagesContainer) return;
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = text;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to new message
  }

  function getBotResponse(userMessage) {
    const msgLower = userMessage.toLowerCase();
    let response = "I'm sorry, I didn't quite understand that. Can you rephrase or ask about 'login', 'upload resume', 'job matching', or 'salary'?";

    if (msgLower.includes("hello") || msgLower.includes("hi") || msgLower.includes("hey")) {
      response = "Hello there! How can I assist you today with Techpro Resume Analyzer?";
    } else if (msgLower.includes("how are you")) {
      response = "I'm functioning optimally! Ready to help you with your resume or job search questions.";
    } else if (msgLower.includes("login") || msgLower.includes("log in") || msgLower.includes("signin")) {
      response = "To log in, use the main login screen with your email and password. If you're new, click 'Register' to create an account.";
    } else if (msgLower.includes("register") || msgLower.includes("signup")) {
      response = "You can register on the login page. Click the 'Don't have an account? Register' button and fill in your details.";
    } else if (msgLower.includes("upload resume") || msgLower.includes("pdf resume")) {
      response = "Once logged in, use the 'File Converters' section on the left. Select 'Upload Resume (PDF only)'. The text will appear in the main area for analysis.";
    } else if (msgLower.includes("convert file") || msgLower.includes("converter")) {
      response = "The 'File Converters' section (on the left after login) can convert various documents (DOC, TXT, images, HTML) to PDF. You can then download the PDF.";
    } else if (msgLower.includes("analyze resume") || msgLower.includes("job match") || msgLower.includes("match jobs")) {
      response = "After your resume text is in the main text area (either by upload or paste), click the 'Analyze & Match Jobs' button for an AI-driven analysis and company suggestions.";
    } else if (msgLower.includes("next page") || msgLower.includes("salary") || msgLower.includes("company details")) {
      response = "The 'Next Page' button (visible after resume analysis) takes you to a detailed view of matched companies, simulated salary ranges, and an option to check salaries for your preferred companies.";
    } else if (msgLower.includes("customer care") || msgLower.includes("support") || msgLower.includes("contact")) {
      response = "For support, click the 'ℹ' icon at the bottom-right. It has our contact email and phone number.";
    } else if (msgLower.includes("what is techpro") || msgLower.includes("what is this")) {
        response = "Techpro is an AI-powered platform to help you analyze your resume, identify key skills, match with suitable job roles and companies, and get simulated salary insights.";
    } else if (msgLower.includes("how to use") || msgLower.includes("guide me")) {
        response = "1. Login or Register. 2. Upload your PDF resume or paste text. 3. Click 'Analyze & Match Jobs'. 4. Explore results and use 'Next Page' for more details like salary simulations.";
    } else if (msgLower.includes("bye") || msgLower.includes("thank you") || msgLower.includes("thanks")) {
      response = "You're welcome! Feel free to ask if anything else comes up. Good luck!";
    }
    return response;
  }

  function handleSendMessage() {
    if (!inputField || !sendButton) return;
    const userText = inputField.value.trim();
    if (userText === "") return;

    addMessage(userText, 'user');
    inputField.value = ''; // Clear input field

    sendButton.disabled = true; // Disable send button while bot "thinks"
    setTimeout(() => {
      const botResponse = getBotResponse(userText);
      addMessage(botResponse, 'bot');
      if (sendButton) sendButton.disabled = false; // Re-enable send button
    }, 600 + Math.random() * 600); // Simulate thinking delay
  }

  function init() {
    if(toggleButton) toggleButton.addEventListener('click', toggleChatbot);
    if(closeButton) closeButton.addEventListener('click', closeChatbot);
    if(sendButton) sendButton.addEventListener('click', handleSendMessage);
    if(inputField) {
      inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
          event.preventDefault(); // Prevent default form submission if any
          handleSendMessage();
        }
      });
    }
  }

  return {
    init
  };
})();

// --- Customer Care Logic ---
const customerCareButton = document.getElementById('customer-care-button');
const customerCarePopup = document.getElementById('customer-care-popup');

if (customerCareButton && customerCarePopup) {
  customerCareButton.addEventListener('click', (event) => {
      customerCarePopup.classList.toggle('show');
      event.stopPropagation(); // Prevent click from bubbling to document
  });

  // Close popup if clicked outside
  document.addEventListener('click', (event) => {
      if (customerCarePopup.classList.contains('show') &&
          !customerCarePopup.contains(event.target) &&
          !customerCareButton.contains(event.target)) {
          customerCarePopup.classList.remove('show');
      }
  });
}

// --- Final Initialization on page load (Chatbot part) ---
// Add Chatbot.init() to the existing window load event listener by M1
// This needs to be merged carefully. For standalone testing of M4's part:
 window.addEventListener('load', () => {
   // Auth.initDefaultUser(); // M1's responsibility
   // if (Auth.getLoggedInUser()) UIManager.showAppScreen(); // M1
   // else UIManager.showLoginScreen(); // M1
   Chatbot.init(); // M4's initialization
 });

// If merging into a single script.js, M1's load listener would be extended:
/*
window.addEventListener('load', () => {
  Auth.initDefaultUser();
  if (Auth.getLoggedInUser()) {
    UIManager.showAppScreen();
  } else {
    UIManager.showLoginScreen();
  }
  Chatbot.init(); // Added M4's init here
});
*/
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
part3.js [unix] (05:29 01/01/1970)                                                                                                                                                                         0,1 All
-- INSERT --

