    //validation for strings, both email field and textara field, and the 2nd parameter is the max length

export const validateString = (value: unknown, maxLength: number) => {
    if (!value || typeof value !== 'string' || value.length > maxLength) {
        return false
    }
    return true
}


   
    //insane error handling. We don't know what the error is (it's type) when returned from the Resend API
    //so we have to check if it's an instance of Error, or an object with a message property, or a string
export const getErrorMessage = (error: unknown): string => {
    let message: string
    if (error instanceof Error) {
        message = error.message
         
      } else if (error && typeof error === 'object' && 'message' in error){
        message = String(error.message)
      } else if (typeof error === 'string') {
        message = error
      }
      else {
        message = 'Something went wrong'
      }
    return message
}