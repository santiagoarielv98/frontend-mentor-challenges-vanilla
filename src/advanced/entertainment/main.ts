import './style.css'

import data from './data.json'
// pt-1.5 inset-x-7 bottom-6
const trending = document.querySelector<HTMLDivElement>('#trending')
const recommended = document.querySelector<HTMLDivElement>('#recommended')

const renderTC = (item: any, isC?: boolean): HTMLElement => {
  const title = item.title ?? item.name
  const datetime = item.release_date ?? item.first_air_date
  const year = datetime.slice(0, 4)
  const image = `https://image.tmdb.org/t/p/original${item.backdrop_path}`

  const LiElement = document.createElement('li')
  LiElement.className = 'h-[14.5rem] rounded-xl overflow-hidden relative group flex flex-col'
  LiElement.classList.add(isC === true ? 'w-[29.4rem]' : 'w-[17.5rem]')
  LiElement.innerHTML = `
<div class="relative h-full">
  <img class="w-full h-full object-cover rounded-xl" src="${image}" />
  <button
    class="absolute top-4 right-5 p-2 rounded-full bg-slate-900/80 hover:bg-white hover:text-black transition-colors z-10"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      class="w-4 h-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
        
      />
    </svg>
  </button>
  <div
    class="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto bg-black/70"
  >
    <a href="#" class="inline-flex items-center gap-4 p-2 bg-white/20 rounded-full">
      <span class="p-2 bg-white/50 rounded-full text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
          <path
            fill-rule="evenodd"
            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
      <span class="text-lg font-medium mr-4"> Play </span>
    </a>
  </div>
</div>
<div class="pt-1.5 inset-x-7 bottom-6${isC === true ? ' absolute' : ''}">
  <ul class="text-sm flex list-disc list-outside space-x-5">
    <li class="list-none">${year}</li>
    <li class="font-medium">
      <svg class="w-3 h-3 inline-flex" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.1733 0H1.82667C0.817827 0 0 0.817827 0 1.82667V10.1733C0 11.1822 0.817827 12 1.82667 12H10.1733C10.6578 12 11.1224 11.8075 11.465 11.465C11.8075 11.1224 12 10.6578 12 10.1733V1.82667C12 1.3422 11.8075 0.877585 11.465 0.535018C11.1224 0.192452 10.6578 0 10.1733 0ZM2.4 5.4H1.2V4.2H2.4V5.4ZM2.4 6.6H1.2V7.8H2.4V6.6ZM10.8 5.4H9.6V4.2H10.8V5.4ZM10.8 6.6H9.6V7.8H10.8V6.6ZM10.8 1.644V2.4H9.6V1.2H10.356C10.4738 1.2 10.5867 1.24678 10.67 1.33004C10.7532 1.41331 10.8 1.52624 10.8 1.644ZM2.4 1.2H1.644C1.52624 1.2 1.41331 1.24678 1.33004 1.33004C1.24678 1.41331 1.2 1.52624 1.2 1.644V2.4H2.4V1.2ZM1.2 10.356V9.6H2.4V10.8H1.644C1.52624 10.8 1.41331 10.7532 1.33004 10.67C1.24678 10.5867 1.2 10.4738 1.2 10.356ZM10.356 10.8C10.6012 10.8 10.8 10.6012 10.8 10.356V9.6H9.6V10.8H10.356Z"
          fill="currentColor"
        ></path>
      </svg>
      <span class="capitalize">movie</span>
    </li>
    <li class="font-medium">PG</li>
  </ul>
  <h3 class="font-medium text-xl">${title}</h3>
</div>
`
  return LiElement
}

recommended!.innerHTML = ''
trending!.innerHTML = ''

data.results.forEach((item: any) => {
  const LiElement = renderTC(item)

  const button = LiElement.querySelector<HTMLButtonElement>('button')
  const path = button?.querySelector('path')

  button?.addEventListener('click', () => {
    path?.classList.toggle('fill-current')
  })

  trending!.appendChild(LiElement)
})

data.results.forEach((item: any) => {
  const LiElement = renderTC(item)

  const button = LiElement.querySelector<HTMLButtonElement>('button')
  const path = button?.querySelector('path')

  button?.addEventListener('click', () => {
    path?.classList.toggle('fill-current')
  })

  recommended!.appendChild(LiElement)
})
