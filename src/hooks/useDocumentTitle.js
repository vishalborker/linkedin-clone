import { useEffect } from 'react'

function useDocumentTitle(documentTitle) {  
  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle])

  return null;
}

export default useDocumentTitle
