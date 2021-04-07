console.log('Starting up');

function init() {
    renderProject()
}

function renderProject() {
    var proj=getProject()
    
    var strHtmls=proj.map(function (proj) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-proj-id="${proj.id}" data-toggle="modal" href="#portfolioModal">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/${proj.id}.jpg" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.title}</p>
        </div>`
    })
    console.log(strHtmls);
    console.log($('.projs-container'));
    $('.projs-container').html(strHtmls);
    $('.portfolio-link').click(function(){
        renderModal($(this).data('proj-id'))
    })
   

}



function renderModal(projId){
    console.log(projId);
    var currProj=getProjById(projId)
    $('.portfolio-modal h2').text(currProj.name)
    $('.portfolio-modal .item-intro').text(currProj.title)
    $('.portfolio-modal .proj-desc').text(currProj.desc)
    $('.proj-image').attr('src', `img/portfolio/${currProj.id}.jpg`)
    console.log(currProj);
    
}
