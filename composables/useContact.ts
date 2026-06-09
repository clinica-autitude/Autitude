export const useContact = () => {
  const phone = '5512991968683'
  const phoneDisplay = '(12) 99196-8683'
  const email = 'contato@autitude.com.br'
  const whatsappUrl = `https://wa.me/${phone}`
  const telUrl = `tel:+${phone}`
  const instagramUrl = 'https://www.instagram.com/clinicaautitude'
  const instagramHandle = '@clinicaautitude'
  const address = 'Rua Major José dos Santos Moreira, 328'
  const neighborhood = 'Vila Rica'
  const city = 'Pindamonhangaba'
  const state = 'SP'
  const fullAddress = `${address} — ${neighborhood} — ${city}/${state}`

  return {
    phone,
    phoneDisplay,
    email,
    whatsappUrl,
    telUrl,
    instagramUrl,
    instagramHandle,
    address,
    neighborhood,
    city,
    state,
    fullAddress
  }
}
