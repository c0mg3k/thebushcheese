$(`#about-us-nav`).click(()=>{
    console.log(`about us has been clicked...`);
    $(`#about-us-modal`).modal(`show`);
});

$(`.coming-soon-nav`).click(()=>{
    console.log(`coming soon btn clicked`);
    $(`#coming-soon-modal`).modal(`show`);
});