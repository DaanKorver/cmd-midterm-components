<section>

    <ol>
        <li class="active">
            <a href="">1.0 Beoogde leerresultaten</a>
        </li>
        <li>
            <a href="">2.0 Onderwijsleeromgeving</a>
        </li>
        <li>
            <a href="">3.0 Toetsing</a>
        </li>
        <li>
            <a href="">4.0 Gerealiseerde leerresultaten</a>
        </li>
    </ol>

    <div>
        <h2>1.0 Beoogde leerresultaten</h2>
        <ol>
            <li>
                <a href="">1.1 Humanity-centered digital designers</a>
            </li>
            <li>
                <a href="">1.2 Competenties</a>
            </li>
            <li>
                <a href="">1.3 Werkveld en maatschappij</a>
            </li>
            <li>
                <a href="">1.4 Ontwikkelingen</a>
            </li>
            <li>
                <a href="">1.5 Ambities en dilema's</a>
            </li>
        </ol>
    </div>
</section>

<style>
    section {
        display: grid;
        grid-template-columns: 20rem 30rem;
        grid-gap: 2.5rem;
        margin-top: 3rem;
    }    

    ol {
        list-style: none;
    }
    
    ol:nth-child(1) li {
        padding: 1rem 2rem;
        border: 1px solid grey;
        font-weight: 600;
        transition: 200ms;
    }

    ol:nth-child(1) li:hover {
        background-color: rgba(255, 240, 33, 0.4);
    }

    .active {
        background-color: var(--color-cmd-yellow);
    }
    
    div {
        border: 2px solid #000;
    }

    h2 {
        border-bottom: 3px solid #000;
        padding: 1rem 2rem;
    }

    div ol {
        margin-top: .5rem;
    }

    div ol li {
        padding: .15rem 2rem;
    }
</style>