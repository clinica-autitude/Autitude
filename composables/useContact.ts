export const useContact = () => {
  const phone = '5512991968683'
  const phoneDisplay = '+55-12-99196-8683'
  const email = 'contato@autitude.com.br'
  const whatsappUrl = `https://wa.me/${phone}`
  const telUrl = `tel:+${phone}`
  const instagramUrl = 'https://www.instagram.com/clinicaautitude'
  const instagramHandle = '@clinicaautitude'
  const address = 'Rua Major José dos Santos Moreira, 328'
  const neighborhood = 'Vila Rica'
  const city = 'Pindamonhangaba'
  const state = 'SP'
  const postalCode = '12410-050'
  const fullAddress = `${address} — ${neighborhood} — ${city}/${state}`
  const latitude = '-22.9309'
  const longitude = '-45.4607'

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
    postalCode,
    fullAddress,
    latitude,
    longitude
  }
}
