import $ from 'jquery'

function fixstringcaps (text2change) {
  // console.log('fixstringcaps ', text2change)
  let textRet = ''
  if (text2change) {
    textRet = text2change.replace(/Ά/g, 'Α')
      .replace(/ά/g, 'α')
      .replace(/Έ/g, 'Ε')
      .replace(/έ/g, 'ε')
      .replace(/Ή/g, 'Η')
      .replace(/ή/g, 'η')
      .replace(/Ί/g, 'Ι')
      .replace(/ί/g, 'ι')
      .replace(/ΐ/g, 'ϊ')
      .replace(/Ό/g, 'Ο')
      .replace(/ό/g, 'ο')
      .replace(/Ύ/g, 'Υ')
      .replace(/ύ/g, 'υ')
      .replace(/ΰ/g, 'ϋ')
      .replace(/Ώ/g, 'Ω')
      .replace(/ώ/g, 'ω')
      .replace(/ς/g, 'Σ')
  }
  return textRet
}

export default {
  twoWay: true,
  // When the bound element is inserted into the DOM...
  bind (el, self) {
    let text = $(el).html()
    // console.log('bind pre modification text', text)
    text = fixstringcaps(text)
    $(el).html(text)
  },
  update (el, self) {
    let text = $(el).html()
    // console.log('updated value pre modification text', text)
    text = fixstringcaps(text)
    $(el).html(text)
  },
  unbind (el, self) {
  }
}
 
