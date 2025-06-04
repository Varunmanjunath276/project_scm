function toggleChatbot() {
  if (popup) popup.classList.toggle('show');
}

function closeChatbot() {
  if (popup) popup.classList.remove('show');
}

function addMessage(text, sender) {
  if (!messagesContainer) return;
  const messageDiv = document.createElement("div");
  messageDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
  messageDiv.textContent = text;
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Enhanced bot response function with improved logic & additional queries
function getBotResponse(userMessage) {
  const msgLower = userMessage.toLowerCase().trim();
  let response = "I'm sorry, I didn't quite understand that. Could you rephrase or ask about 'login', 'upload resume', 'job matching', or 'salary'?";

  const responses = {
    "hello": "Hello there! How can I assist you today with Techpro Resume Analyzer?",
    "hi": "Hi there! Need help with anything specific?",
    "how are you": "I'm functioning optimally! Ready to help you with your resume or job search questions.",
    "login": "To log in, use the main login screen with your email and password. If you're new, click 'Register' to create an account.",
    "register": "You can register on the login page. Click the 'Don't have an account? Register' button and fill in your details.",
    "upload resume": "Once logged in, go to the 'File Converters' section. Select 'Upload Resume (PDF only)' to start analysis.",
    "convert file": "Go to the 'File Converters' section to convert documents (DOC, TXT, images, HTML) to PDF, then download your file.",
    "analyze resume": "Upload your resume, then click the 'Analyze & Match Jobs' button to get AI-driven insights.",
    "job match": "After resume analysis, you'll see matched jobs and companies based on your skills.",
    "salary": "Use the 'Next Page' button to see company details and salary estimates.",
    "customer care": "For support, click the 'ℹ' icon in the bottom-right corner for our contact details.",
    "what is techpro": "Techpro is an AI-powered platform to analyze resumes, match jobs, and provide salary insights.",
    "help": "You can ask about:\n- Login/Register\n- Upload Resume\n- Resume Analysis\n- Job Matching\n- Salary Simulation\n- Customer Support",
    "bye": "You're welcome! If you need anything else, just ask. Good luck!"
  };

  for (const key in responses) {
    if (msgLower.includes(key)) {
      response = responses[key];
      break;
    }
  }

  return response;
}

// === Optional Enhancements ===
chatbotSendButton?.addEventListener("click", () => {
  const userInput = chatbotInput?.value.trim();
  if (userInput) {
    addMessage(userInput, "user");
    const botResponse = getBotResponse(userInput);
    setTimeout(() => addMessage(botResponse, "bot"), 500);
    chatbotInput.value = "";
  }
});

