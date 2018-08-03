const uppy = Uppy.Core({ autoProceed: false });
uppy.use(Uppy.Dashboard, {
  target: "#drag-drop-area",
  inline: true,
  height: 450
});
uppy.use(Uppy.Webcam, { target: Uppy.Dashboard });
uppy.use(Uppy.Tus, { endpoint: "https://master.tus.io/files/" });