import { server } from "./server.js"

const form = document.querySelector("#form")
const input = document.querySelector("#url")
const content = document.querySelector("#content")

form.addEventListener("submit", async (event) => {
  event.preventDefault()
  content.classList.add("placeholder")

  const videoURL = input.value

  if (!videoURL.includes("shorts")) {
    return (content.textContent = "Este video nao é um shorts")
  }

  const [_, params] = videoURL.split("/shorts/")
  const [videoID] = params.split("?si")

  content.textContent = "Obtendo o texto do audio..."

  try {
    const transcriptionResponse = await server.get(`/summary/${videoID}`)

    if (transcriptionResponse.data && transcriptionResponse.data.result) {
      content.textContent = "Realizando o resumo..."

      const summaryResponse = await server.post("/summary", {
        text: transcriptionResponse.data.result,
      })

      if (summaryResponse.data && summaryResponse.data.result) {
        content.textContent = summaryResponse.data.result
      } else {
        content.textContent = "Erro ao obter o resumo."
      }
    } else {
      content.textContent = "Erro ao obter a transcrição."
    }
  } catch (error) {
    console.error("Erro ao processar o vídeo:", error)
    content.textContent = "Ocorreu um erro ao processar o vídeo."
  }

  content.classList.remove("placeholder")
})
