function toggleChatbot() {
  if (popup) popup.classList.toggle('show');
}

function closeChatbot() {
  if (popup) popup.classList.remove('show');
}

function addMessage(text, sender) {
  if (!messagesContainer) return;
  const messageDiv = document.createElement('div');
  messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
  messageDiv.textContent = text;
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
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
  } else if (msgLower.includes("help") || msgLower.includes("menu") || msgLower.includes("options")) {
    response = "You can ask about:\n- Login/Register\n- Upload Resume\n- Resume Analysis\n- Company Matching\n- Salary Simulation\n- Support";
  } else if (msgLower.includes("bye") || msgLower.includes("thank you") || msgLower.includes("thanks")) {
    response = "You're welcome! Feel free to ask if anything else comes up. Good luck!";
  }

  return response;
}

// === Optional Enhancements ===
chatbotSendButton?.addEventListener("click", () => {
  const userInput = chatbotInput?.value.trim();
  if (userInput) {
    addMessage(userInput, "user");
    const botReply = getBotResponse(userInput);
    setTimeout(() => {
      addMessage(botReply, "bot");
    }, 500); // mimic thinking delay
    chatbotInput.value = "";
  }
});

chatbotInput?.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    chatbotSendButton.click();
  }
});

