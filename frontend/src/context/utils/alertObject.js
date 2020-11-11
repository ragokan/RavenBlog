function alertObject(message, color) {
  const id = Math.floor(Math.random() * 10009875)
  return {
    id,
    message,
    color,
  }
}

export default alertObject
