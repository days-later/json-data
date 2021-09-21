<script lang=ts>
    import { dev } from '$app/env';
    import '../app.css';

    let input = !dev ? '' : `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`;

    function transform( txt: string ): string[] {
        const a = txt.split( "\n" ).map( v => v.trim().replace( /\s+/g, ' ' ) ).filter( Boolean );
        return a;
    }
    $: output = transform( input );

    function copy() {
        navigator.clipboard.writeText( JSON.stringify( output, null, "\t" ) );
    }
</script>

<div class="ctrl">
    <button on:click={copy}>Copy JSON</button>
</div>
<main>
    <textarea bind:value={input} />
    <div>{#each output as txt}<p>{txt}</p>{/each}</div>
</main>

<style>
    .ctrl {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        align-items: stretch;

        margin: 2rem 2rem 0;
    }
    button {
        margin: 0 0 0 2rem;
        padding: 1rem 2rem;

        border: 0;
        background: #fff;
        box-shadow: .2rem .2rem 0 0 #ddd;

        font-family: inherit;
        font-size: .75rem;
        line-height: 1;
        text-transform: uppercase;
    }
    button:hover {
        cursor: pointer;
        box-shadow: .15rem .15rem 0 0 #bbb;
    }

    main {
        flex: 1 1 auto;

        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: stretch;

        gap: 2rem;
        margin: 2rem;
    }

    main textarea,
    main div {
        flex: 1 1 calc( 50% - 1rem );
        width: calc( 50% - 1rem );
        margin: 0;
        padding: 2rem;

        border: 0;
        background: #fff;
        box-shadow: 0 0 2rem #ddd;

        font-family: inherit;
        font-size: inherit;
        line-height: 1.5;
    }

    main div {
        padding: 1rem;
    }
    main p {
        margin: 1rem 1rem 1.5rem;
    }
</style>
