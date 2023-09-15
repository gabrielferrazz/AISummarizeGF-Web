# Shorts-AI-Translate
Sistema de conversão de vídeo para texto resumido

# Para rodar esse código, você precisará instalar o Node.js
.Windows/ Mac/ Linux => https://nodejs.org/en/download


# Para rodar esse código, você precisará ter as seguintes bibliotecas instaladas, execute via CMD os seguintes comandos:

1. npm i

2. npm create vite@latest

3. npm i express cors axios ytdl-core

4. npm i @xenova/transformers fluent-ffmpeg ffmpeg-static node-wav

# Adicionar extensions.json VSCODE.

{
  "recommendations": [
    "esbenp.prettier-vscode",
    "PKief.material-icon-theme",
    "rocketseat.theme-omni"
  ]
}

# Adicionar settings.json VSCODE.


{
  // editor
  "editor.wordWrap": "on",
  "editor.fontSize": 18,
  "editor.lineHeight": 30,
  "editor.tabSize": 2,
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,
  "editor.minimap.enabled": false,
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "files.autoSave": "afterDelay",

  // explorer
  "explorer.compactFolders": false,

  // workbench
  "workbench.editor.enablePreview": false,
  "workbench.iconTheme": "material-icon-theme",
  "workbench.colorTheme": "Omni",

  // prettier
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.enable": true,
  "prettier.singleQuote": false,
  "prettier.tabWidth": 2,
  "prettier.semi": false,

  // terminal
  "terminal.integrated.fontSize": 16,
  "terminal.integrated.profiles.windows": {
    "Git Bash": {
      "source": "Git Bash"
    }
  },
  "terminal.integrated.defaultProfile.windows": "Git Bash"
}




Após instalar todas essas bibliotecas, o código estará pronto para rodar sem problemas. Lembre-se de também ter o arquivo 'dados.xlsx' na mesma pasta do script para que o pandas possa ler os dados corretamente.
