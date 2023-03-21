<svelte:head>
  <title>Bizuki - Portfolio</title>
</svelte:head>

<h1>Hello! My name is Daler.</h1>
<div>
    <h2>About me</h2>
    <p>
        I am a third-year student of Innopolis University at Cybersecurity track.
        Previously, I've completed Innopolis Lyceum which is located in the same city as UI (as you can imagine 🤓).
    </p>
    <p>
        In my school years I'd often went to different competitive programming contests and got decent results, so I think 
        I can call myself competitive programmer. But due to enormous time spent on this hobby in the past, currently I've lost 
        such interest in it, but nevertheless I want to show some of my results:
        <ul>
            <li>
                <details>
                    <summary>VSOSH 🥉 (I've enrolled here using this)</summary>
                    It's one of the most established olymiads in the russia as it supported by the government and almost all Universities.
                    But unfortunately on my last year COVID was active and I obtained my diploma automatically 🥺
                </details>
            </li>
            <li>Open Innopolis Olympiad 🐬 🥉</li>
            <li><a href="https://olympiads.ru/zaoch/">Open olympiad</a> 🥉</li>
            <li><a href="https://izho.kz/">IZhO</a> 🥉 (one place from 🥈)</li>
        </ul>
    <h2>Work</h2>
    <p>
        Currently I am working at Yandex Maps as Python developer but often knowledge of other languages is required:
        <ul>
            <li>Python</li>
            <li>C++</li>
            <li>JS</li>
            <li>SQL</li>
            <li>Perl</li>
        </ul> 
        So I can write some production ready code in these languages.
    <p>
        Before coming to Yandex I worked as a competitive programmer teacher but I've left after half year, as I understood
        that working with unenthusiastic children is too much for me and make them interested is very hard task for me, very short-tempered person.
        I was like 😤😡😡 after repeating 3 times the same thing.
    </p>
</div>

<style>

    details > summary {
        list-style: none;
    }

    summary:hover {
        text-decoration: underline;
    }

    summary::-webkit-details-marker {
        display: none
    }

    summary::after {
        content: none;
    }

    details[open] summary:after {
        content: none;
    }

</style>
