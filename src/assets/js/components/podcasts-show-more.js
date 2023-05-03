const podcastsShowMore = document.getElementById('show-more')
const podcastsLen = document.querySelectorAll('.podcasts__item').length
const podcastsArr = Array.from(document.querySelector('.podcasts__list').children) 
const podcastsSection = document.getElementById('podcasts')



let items = 0

let sectionPodcastsWidth = podcastsSection.clientWidth
if (sectionPodcastsWidth > 585) {
    items = 8
} else {
    items = 4
}



podcastsShowMore.addEventListener('click', () => {
  


    items += 4;

    const visItems = podcastsArr.slice(0 , items)
    visItems.forEach(el => el.classList.add('is-visible'));

    if (visItems.length === podcastsLen) {
        podcastsShowMore.style.display = 'none'
    }

})