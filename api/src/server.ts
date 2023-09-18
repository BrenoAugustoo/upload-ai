import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { getAllPromptsRoute } from './routes/get-all-prompts'
import { uploadVideoRoute } from './routes/upload-video'
import { createTranscription } from './routes/create-transcription'
import { generateAiCompletionRoute } from './routes/generate-ai-completion'

const app = fastify()

app.register(fastifyCors, {
  origin: '*'
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscription)
app.register(generateAiCompletionRoute)

app.listen({
  port: 3336
}).then(() => {
  console.log('HTTP Server running')
})