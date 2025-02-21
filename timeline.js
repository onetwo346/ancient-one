exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      timeline: [
        { title: "Creation (4000 BCE)", description: "The beginning of time." },
        { title: "Birth of Christ (1 CE)", description: "The start of the Common Era." }
      ]
    })
  };
};
