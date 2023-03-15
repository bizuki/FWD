<script>
  import { Router, Route } from "svelte-routing";

  import Home from "./routes/Home.svelte";
  import ComicsPage from "./routes/ComicsPage.svelte";

  import Navbar from "./components/Navbar.svelte";
  import Footer from "./components/Footer.svelte";

</script>

<Router>
  <div class="container">
    <Navbar />

    <main>
      <Route path="comics_page" component="{ComicsPage}" />
      <Route path="/" component="{Home}" />
    </main>

    <Footer />
  
  </div>
</Router>
