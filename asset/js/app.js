

/************ Navbar ***************/

const navExploreButton = document.querySelector('.explore-btn');
const nav = document.querySelector('.nav');

navExploreButton.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
})



/************ tabs ***************/

const tabs = document.querySelectorAll('.dlp-info-tab');
const tabContent = document.querySelectorAll('.dlp-info');

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        const index = tab.getAttribute('data-tab-index');
        tabs.forEach(tab => {
            tab.classList.remove('active');
        })

        console.log(index);

        tab.classList.add('active');
        tabContent.forEach(content => {
            content.classList.remove('active');
        });

        tabContent[index].classList.add('active');

    })

})


/************ accordion ***************/
let accordion = document.querySelectorAll('.accordion');


accordion.forEach(item => {
    item.addEventListener('click', () => {
        accordion.forEach(item => {
            item.classList.remove('active');
        });
        item.classList.toggle('active');
    })
})




/************ recreation page ***************/
const recTab = document.querySelectorAll('.tab-link');
const recTabContent = document.querySelector('.tab-content');
const recTabContentItem = document.querySelectorAll('.rec-card');


recTab.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        recTab.forEach(tab => tab.classList.remove('active'));
        const target = tab.getAttribute('data-target');
        tab.classList.add('active');
        
        recTabContentItem.forEach(item => {

            const category = item.getAttribute('data-category');

            item.style.display = 'none';
            
            if(target === "all"){
                item.style.display = 'block';
            }

            if(category === target){
                item.style.display = 'block';
            }
        })

    })
})