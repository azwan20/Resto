export default function Footer(){
    return(
        <>
            <footer>
                <div class="foot d-flex">
                    <button id="prev-page">&lt;</button>
                    <div id="page-info">
                        <span id="current-page">1</span>
                    </div>
                    <button id="next-page">&gt;</button>
                </div>
            </footer>
        </>
    )
}