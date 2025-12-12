require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const OpenAI = require('openai');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Groq Setup (via OpenAI Compatibility)
const openai = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1"
});

// Multer setup for image upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.get('/', (req, res) => {
    res.send('AI Creative Workflow API is running (Llama Vision Powered)');
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

async function runLlamaVision(imageBuffer, mimeType) {
    try {
        const base64Image = imageBuffer.toString('base64');
        const dataUrl = `data:${mimeType};base64,${base64Image}`;

        const completion = await openai.chat.completions.create({
            model: "meta-llama/llama-4-scout-17b-16e-instruct",
            response_format: { type: "json_object" },
            messages: [
                {
                    role: "user",
                    content: [
                        {
                            type: "text",
                            text: `You are an expert social media manager. Analyze this image and generate a JSON object with these EXACT fields:
                            {
                                "caption": "Viral caption string...",
                                "hashtags": "Hashtags string...",
                                "description": "Professional description string..."
                            }
                            Do not output markdown code blocks, just the raw JSON.`
                        },
                        {
                            type: "image_url",
                            image_url: {
                                url: dataUrl
                            }
                        }
                    ]
                }
            ],
            temperature: 0.5,
        });

        const content = completion.choices[0].message.content;
        return JSON.parse(content);
    } catch (error) {
        console.error("Groq/Llama Error:", error.message);
        throw error;
    }
}

app.post('/api/analyze', upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No image uploaded" });
    }

    try {
        const analysis = await runLlamaVision(req.file.buffer, req.file.mimetype);
        res.json(analysis);
    } catch (error) {
        console.error("Server Handler Error:", error);

        // Fallback Mock Data for Demo Purposes
        console.log("⚠️ Switching to Demo Mode due to API Error");
        res.json({
            caption: "✨ Experience the future of creativity! This automated caption demonstrates our premium AI workflow. #Innovation #Tech",
            hashtags: "#AI #ContentCreation #Marketing #TechTrends #Automation #FutureOfWork #CreativeFlow #SocialMediaStrategy #Innovation #DigitalArt #TechLife #GrowthHacking #Productivity #StartupLife #DesignInspiration",
            description: "This is a demonstration of the Content Generator. In a live environment, this text would be perfectly tailored to your uploaded image, describing its visual elements, mood, and selling points with professional copywriting precision.",
            isMock: true
        });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
