<script>
    import "./styles.css";

    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";

</script>

<div class="container">
    <Navbar />

    <main>
        <slot/>
    </main>

    <Footer />

</div>
