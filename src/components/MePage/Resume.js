import { HeadTitle } from "../HeadTitle"

export const Resume = () => {
    return (
        <div className="content-resume mb-4">
            <HeadTitle text="เรซูเม่" />
            {/* <a target="_blank" rel="noreferrer" href="/files/Pongsakorn_Resume.png">
            <img alt="Resume" src="/files/Pongsakorn_Resume.png" width="100%" /></a> */}
            <div id="carousel-resume" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carousel-resume" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-resume" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="/files/Pongsakorn_Programming_Resume.png" alt="Programming Resume" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Programming</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="/files/Pongsakorn_Frontend_Resume.png" alt="Front-end Resume" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Front-end</h5>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carousel-resume" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
        </div>
    )
}