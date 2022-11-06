const tabs = [...document.querySelectorAll('.services_nav-item')]
const tabsContent = [...document.querySelectorAll('.services_nav_content-item')]

const handleChangeContent = (idx) => {
    tabsContent.forEach((current) => current.classList.remove('services_nav_content_item-active'));

    tabsContent[idx].classList.add('services_nav_content_item-active');
};

const handleChangeTab = (tab) => {
    const currentTab = tab.target

    const index = tabs.indexOf(currentTab)

    tabs.forEach((current) => current.classList.remove('services_nav-colored'))

    currentTab.classList.add('services_nav-colored')

    handleChangeContent(index)
}

tabs.forEach((tab) => tab.addEventListener('click', handleChangeTab));


const slidesContent = [...document.querySelectorAll('.section7-container')]
const sliderTabs = [...document.querySelectorAll('.section7-slider-item')]
const sliderArrowRight = document.querySelector('.section7-slider-item-arrow-right')
const sliderArrowLeft = document.querySelector('.section7-slider-item-arrow-left')
const imageCategories = document.querySelector('.section5-images')
const section5Button = document.querySelector('.section5-button')
const imageSectionTabs = document.querySelectorAll('.section5-nav-item');

const slides = sliderTabs.
            filter(slide => !slide.classList.contains('section7-slider-item-arrow'))

const activeTabClass = 'section7-slider-item-active'
const activeContentClass = 'section7-container-active'

const handleChangeSlides = (direction) => {
    let idx = slides.findIndex(slide => slide.classList.contains(activeTabClass))
    const slidesLength = slides.length

    if (direction === 'right') {
        idx += 1
        if (idx > slidesLength - 1) {
            idx = 0
        }
        console.log(idx)
        slides.forEach(e => e.classList.remove(activeTabClass))
        slidesContent.forEach(e => e.classList.remove(activeContentClass))
        slides[idx].classList.add(activeTabClass)
        slidesContent[idx].classList.add(activeContentClass)
    } else {
        idx -= 1
        if (idx < 0) {
            idx = slidesLength - 1
        }

        slides.forEach(e => e.classList.remove(activeTabClass))
        slidesContent.forEach(e => e.classList.remove(activeContentClass))
        slides[idx].classList.add(activeTabClass)
        slidesContent[idx].classList.add(activeContentClass)
    }

}

sliderArrowRight.addEventListener('click', () => handleChangeSlides('right'))
sliderArrowLeft.addEventListener('click', () => handleChangeSlides('left'))


const handleSetSlide = (event) => {
    console.log(event)
    const slideTab = event.target
    let idx = slides.findIndex(slide => slide.id === slideTab.parentElement.id)
    console.log("slidesContent", slidesContent)
    console.log(idx)
    if (slides[idx]) {
        slides.forEach(e => e.classList.remove(activeTabClass))
        slidesContent.forEach(e => e.classList.remove(activeContentClass))
        slides[idx].classList.add(activeTabClass)
        slidesContent[idx].classList.add(activeContentClass)
    }
}

slides.forEach(slide => slide.addEventListener('click', handleSetSlide))



const categoryImages = [
    {path: '/images/section5/pic1.png', category: 'Graphic Design'},
    {path: '/images/section5/pic2.png', category: 'Web Design'},
    {path: '/images/section5/pic3.png', category: 'Landing Pages'},
    {path: '/images/section5/pic4.png', category: 'Wordpress'},
    {path: '/images/section5/pic5.png', category: 'Graphic Design'},
    {path: '/images/section5/pic6.png', category: 'Web Design'},
    {path: '/images/section5/pic7.png', category: 'Landing Pages'},
    {path: '/images/section5/pic8.png', category: 'Wordpress'},
    {path: '/images/section5/pic9.png', category: 'Graphic Design'},
    {path: '/images/section5/pic10.png', category: 'Web Design'},
    {path: '/images/section5/pic11.png', category: 'Landing Pages'},
    {path: '/images/section5/pic12.jpg', category: 'Wordpress'},
    {path: '/images/section5/pic13.jpg', category: 'Graphic Design'},
    {path: '/images/section5/pic14.jpg', category: 'Web Design'},
    {path: '/images/section5/pic15.jpg', category: 'Landing Pages'},
    {path: '/images/section5/pic16.jpg', category: 'Wordpress'},
    {path: '/images/section5/pic17.jpg', category: 'Graphic Design'},
    {path: '/images/section5/pic18.jpg', category: 'Web Design'},
    {path: '/images/section5/pic19.jpg', category: 'Landing Pages'},
    {path: '/images/section5/pic20.jpg', category: 'Wordpress'},
    {path: '/images/section5/pic21.jpg', category: 'Graphic Design'},
    {path: '/images/section5/pic22.jpg', category: 'Web Design'},
    {path: '/images/section5/pic23.jpg', category: 'Landing Pages'},
    {path: '/images/section5/pic24.jpg', category: 'Wordpress'} ]

const handleRenderCategoriesImages = () => {
    let data = [];
    const tabs = [...imageSectionTabs];
    const currentCategoryIdx = tabs.findIndex(tab => tab.classList.contains('section5-nav-item-active'));
    const category = tabs[currentCategoryIdx].textContent
    const isShownAll = section5Button.dataset.loaded;

    if (category === 'All') {
        data = categoryImages.map(image => (
            `<li class="section5-images-item">
                    <img class="section5-image" alt="Image of category ${image.category}" src="${image.path}">
                    <div class="section5-images-hover">
                        <img alt="Icon" src="images/section5/icon.svg">
                        <p class="section5-images-hover-text1">CREATIVE DESIGN</p>
                        <p class="section5-images-hover-text2">${image.category}</p>
                    </div>
                </li>`
            ))
    } else {
        const filteredCategoryImages = categoryImages.filter(image => image.category === category);

        data = filteredCategoryImages.map(image => (
            `<li class="section5-images-item">
                    <img class="section5-image" alt="Image of category ${image.category}" src="${image.path}">
                    <div class="section5-images-hover">
                        <img alt="Icon" src="images/section5/icon.svg">
                        <p class="section5-images-hover-text1">CREATIVE DESIGN</p>
                        <p class="section5-images-hover-text2">${image.category}</p>
                    </div>
                </li>`
        ))
    }

    const shownData = isShownAll ? data : data.slice(0, (data.length / 2))

    if (shownData.length === data.length) {
        section5Button.remove();
    }

    imageCategories.innerHTML = shownData.join(' ');
}

handleRenderCategoriesImages();

const handleActive = (tab => {
    imageSectionTabs.forEach(e => e.classList.remove('section5-nav-item-active'))
    tab.classList.add('section5-nav-item-active')
})

imageSectionTabs.forEach(tab =>
    tab.addEventListener('click',() => {
    handleActive(tab)
    handleRenderCategoriesImages()
}))

section5Button.addEventListener('click', () => {
    section5Button.dataset.loaded = 'true';
    handleRenderCategoriesImages()
})




