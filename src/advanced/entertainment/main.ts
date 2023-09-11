import './style.css'

import data from './data.json'

const trending = document.querySelector<HTMLDivElement>('#trending')

const renderTrendingCard = (item: (typeof data.results)[number]): string => {
  console.log(item)
  item.release_date = item.release_date ?? item.first_air_date
  item.title = item.title ?? item.name
  return `
<li class="w-[29.4rem] h-[14.5rem] bg-red-500 rounded-xl overflow-hidden relative">
  <img class="w-full h-full object-cover" src="https://image.tmdb.org/t/p/original${item.backdrop_path}" alt="${
    item.title
  }" />
  <div class="inset-x-0 bottom-0 absolute px-7 py-6">
    <ul class="text-sm flex list-disc list-outside space-x-5">
      <li class="list-none">${item.release_date.slice(0, 4)}</li>
      <li class="font-medium">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 inline-flex"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
          />
        </svg>

        <span class="capitalize">${item.media_type}</span>
      </li>
      <li class="font-medium">PG</li>
    </ul>

    <h3 class="font-medium">${item.title}</h3>
  </div>
</li>
`
}

const cards = data.results.map((item: any) => {
  return renderTrendingCard(item)
})

trending!.innerHTML = cards.join('')
