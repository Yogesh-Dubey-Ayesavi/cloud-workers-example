addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
	// Check if the request method is POST
	if (request.method === 'POST') {
	  try {
		// Parse the JSON data from the request body
		const data = await request.json()
  
		// Process the data as needed
		console.log('Received POST data:', data)
  
		// Return a response
		return new Response('POST request successful', { status: 200 })
	  } catch (error) {
		// Handle any errors during parsing or processing
		console.error('Error processing POST request:', error)
		return new Response('Error processing POST request', { status: 500 })
	  }
	} else {
	  // If the request method is not POST, return a 405 Method Not Allowed response
	  return new Response('Method Not Allowed', { status: 405 })
	}
  }
  