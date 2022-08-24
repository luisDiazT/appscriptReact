const doGet = () =>
  HtmlService.createTemplateFromFile("appscript/frontend/index.html")
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL) //Para evitar el nocrossorigin
    .setSandboxMode(HtmlService.SandboxMode.IFRAME) //Para poderlo agregar como IFRAME
    .addMetaTag(
      "viewport",
      "width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1"
    )
    .setTitle("Proyecto Appscript React");

const include = (ruta) =>
  HtmlService.createHtmlOutputFromFile(ruta).getContent();
