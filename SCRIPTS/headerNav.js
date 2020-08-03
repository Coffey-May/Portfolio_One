export const headerNavComponent = () => {
    const contentElement = document.getElementById("header")

    contentElement.innerHTML += `
    <nav class="smart-scroll site-header navbar-expand-sm">
    <a class=" backdrop navbar-brand" href="#up">
        <div class=" text logo-boy">CM <br>DEV</div>
    </a>
    <span style="color:white;padding-top:15px;margin-left:85vw;margin-top:-90px;"
        class=" fas fa-bars navbar-toggler-icon">
        <button style="height: 10vh;width: 10vw;margin-top:-7vh;margin-left:-3vw;" class="navbar-toggler"
            type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">


        </button>
    </span>


    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul style="display: flex;flex-direction: row;" class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#down">About<span class="sr-only">(current)</span></a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#bottom">Work</a>
            </li>
            <li class="nav-item">
                <div style="background-color: transparent;" class="dropdown">
                    <button style="background-color: transparent;padding-top:15px;border:none;  padding-right:.3rem;
               " class="nav-link btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Contact
                    </button>
                    <div style="background-color: rgb(156, 156, 156);" class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton">
                        <a style="color: black;" class="dropdown-item" href="#"><i
                                class="fab fa-facebook"></i></a>
                        <a style="color: black;" class="dropdown-item" href="#"><i
                                class="fab fa-instagram"></i></a>
                        <a style="color: black;" class="dropdown-item" href="#"><i
                                class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</nav>
    `
}


headerNavComponent()