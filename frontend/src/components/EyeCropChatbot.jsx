import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

async function fetchChat(url, requestData) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });

  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
}

const apiKey = "AIzaSyAh2qi-zgjWVVNgYL8h6sJzaA6xX2Vlb8A";
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

const EyeCropChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [animalData, setAnimalData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [dataError, setDataError] = useState(null);

  // Fetch animal data from the endpoint
  useEffect(() => {
    fetch("http://192.168.84.25:8000/report")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch animal data");
        }
        return response.json();
      })
      .then((jsonData) => {
        setAnimalData(jsonData);
        setDataLoading(false);
      })
      .catch((err) => {
        setDataError(err.message);
        setDataLoading(false);
      });
  }, []);

  // Process the animal data into a summary
  const getAnimalSummary = () => {
    if (!animalData || animalData.length === 0) {
      return "No animal data available.";
    }

    // Create a summary of the animal data using the new format (name and timestamp)
    const animalSummary = animalData
      .map(
        (item, index) =>
          `${index + 1}. Animal: ${
            item.name || "Unknown"
          }, Timestamp: ${new Date(item.timestamp).toLocaleString()}`
      )
      .join("\n");

    return `
Animal Detection Summary:
Total detections: ${animalData.length}

Recent detections:
${animalSummary}
    `;
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const userMessage = { role: "user", content: userInput };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput("");
    setLoading(true);

    try {
      const animalSummary = getAnimalSummary();

      const initialPrompt = `
    You are an assistant with access to recent animal detection data from the EyeCrop system. Here is the data:
    ${animalSummary}
  
    The user can now ask questions. Respond appropriately based on this context.
  `;

      const requestData = {
        contents: [
          {
            parts: [{ text: initialPrompt + userInput }],
          },
        ],
      };

      const assistantResponse = await fetchChat(url, requestData);

      // Add the assistant's response to the messages
      const assistantMessage = {
        role: "assistant",
        content: assistantResponse,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error fetching chat response:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm sorry, I encountered an error processing your request. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Handle key press for sending messages with Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="container mx-auto p-4 mt-24">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
        EyeCrop Assistant
      </h1>
      <Card className="shadow-lg border border-green-100">
        <CardHeader className="bg-green-50 border-b border-green-100">
          <CardTitle className="text-xl font-bold text-green-700">
            Chat with Your Garden Assistant
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          <div className="h-[20rem] overflow-y-auto bg-gray-50 p-4 rounded border border-green-100">
            {messages.length === 0 ? (
              <div className="text-gray-500 text-center py-8">
                <p>Welcome to EyeCrop Assistant!</p>
                <p className="text-sm mt-2">
                  Ask me about your garden protection system, animal detections,
                  or get gardening advice.
                </p>
              </div>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    msg.role === "user"
                      ? "flex justify-end"
                      : "flex justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.role === "user"
                        ? "bg-green-600 text-white rounded-tr-none"
                        : "bg-white border border-green-100 text-gray-800 rounded-tl-none shadow-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))
            )}
            {dataLoading && messages.length === 0 && (
              <div className="text-center text-green-600 py-2">
                Loading animal data...
              </div>
            )}
            {dataError && (
              <div className="text-center text-red-500 py-2">
                Error loading data: {dataError}
              </div>
            )}
          </div>
          <div className="flex">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about your garden or animal detections..."
              className="flex-1 p-3 border border-green-200 rounded-l focus:outline-none focus:ring-2 focus:ring-green-500"
              disabled={loading || dataLoading}
            />
            <Button
              onClick={handleSendMessage}
              disabled={loading || dataLoading || !userInput.trim()}
              className="rounded-l-none bg-green-600 hover:bg-green-700"
            >
              {loading ? "..." : "Send"}
            </Button>
          </div>
          <div className="text-xs text-gray-500 text-center">
            {animalData.length > 0
              ? `Currently tracking ${animalData.length} animal detection events`
              : dataLoading
              ? "Loading animal data..."
              : "No animal detection data available"}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EyeCropChatbot;
