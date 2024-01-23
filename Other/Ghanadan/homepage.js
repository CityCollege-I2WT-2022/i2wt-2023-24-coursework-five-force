document.getElementById("prevBtn").addEventListener("click", function() {
    moveTimeline("prev");
});

document.getElementById("nextBtn").addEventListener("click", function() {
    moveTimeline("next");
});

let currentIndex = 0;

function moveTimeline(direction) {
    const items = document.querySelectorAll(".timelineItem");
    if (direction === "next" && currentIndex < items.length - 3) {
        currentIndex++;
    } else if (direction === "prev" && currentIndex > 0) {
        currentIndex--;
    }else{
        currentIndex=0;
    }
    animateTimeline(currentIndex);
}

const backgroundImageMap = {
    item1: 'url("../../Images/Ghanadan/war-1.jpeg")',
    item2: 'url("../../Images/Ghanadan/war-2.jpg")',
    item3: 'url("../../Images/Ghanadan/war-3.jpeg")',
    item4: 'url("../../Images/Ghanadan/war-4.avif")',
    item5: 'url("../../Images/Ghanadan/war-5.jpg")',
    item6: 'url("../../Images/Ghanadan/war-6.jpg")',
    item7: 'url("../../Images/Ghanadan/war-8.jpg")',
    item8: 'url("../../Images/Ghanadan/war-7.jpeg")', 
    item9: 'url("../../Images/Ghanadan/war-9.jpg")',
    item10: 'url("../../Images/Ghanadan/war-10.jpg")',
};

const battleDetailsLinksMap = {
    item1: 'battles/battle-1.html',
    item2: 'battles/battle-2.html',
    item3: 'battles/battle-3.html',
    item4: 'battles/battle-4.html',
    item5: 'battles/battle-5.html',
    item6: 'battles/battle-6.html',
    item7: 'battles/battle-7.html',
    item8: 'battles/battle-8.html',
    item9: 'battles/battle-9.html',
    item10: 'battles/battle-10.html',
};

function addTimeLineItemImage(){
    const items = document.querySelectorAll(".timelineItem");

    items.forEach(item => {
        const itemId = item.id;
        const itemSquare = item.querySelector('.itemSquare');

        // Check if the image URL exists in the map for the current item ID
        if (backgroundImageMap[itemId]) {
            itemSquare.style.backgroundImage = backgroundImageMap[itemId];
            itemSquare.style.backgroundSize = 'cover'; // Ensure the image covers the item square
            itemSquare.style.backgroundPosition = 'center'; // Center the image
        }
    });
}

function animateTimeline(index) {
    const timeline = document.querySelector(".timeline");
    const items = document.querySelectorAll(".timelineItem");
    const totalItems = items.length;
    const itemsPerPage = 3;
    const viewingTitle = document.getElementById('viewingTitle');
    const viewingDescription = document.getElementById('viewingDescription');
    var selectedItem = document.querySelectorAll(".selectedIndex");


    // Remove the 'selected' effect from currently selected item
    selectedItem.forEach(selectedItem => {
        selectedItem.classList.remove("selectedIndex");
    });

    // Calculate the transform percentage based on the current index
    const transformPercentage = -(100 / itemsPerPage) * index;
    timeline.style.transform = `translateX(${transformPercentage}%)`;

    // Ensure index is within bounds
    if (index < 0) index = 0;
    if (index > items.length - itemsPerPage) index = items.length - itemsPerPage;

    // Update background image based on the current item
    const currentItem = items[index];
    const title = currentItem.querySelector('.content h2').textContent;
    const description = currentItem.querySelector('.content p').textContent;
    const learnMoreButtonLink = document.getElementById('learnMoreLink').setAttribute('href',battleDetailsLinksMap[currentItem.id]);
    currentItem.querySelector(".itemSquare").classList.add("selectedIndex");

    viewingTitle.textContent = title;
    viewingDescription.textContent = description;

    document.body.style.backgroundImage = backgroundImageMap[currentItem.id] || 'none';
    
    
}
addTimeLineItemImage();
animateTimeline(currentIndex);