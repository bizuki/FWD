<script>
    import { link } from "svelte-routing";
</script>

<header>
    <div class="topnav">
      <div class="links">
        <a href="/" use:link>Home</a>
        <a href="comics_page"use:link>Comics page</a>
      </div>
    </div>
  <hr>
</header>

<style>
  
    .topnav {
      width: 100%;
      margin-bottom: 1em;
      padding: 0.7em 0.5em ;
      background-color: var(--background);
    }
  
    .topnav .links{
      display: flex;
      flex-direction: row;
    }
  
    .topnav .links a {
      font-size: 1.5rem;
      color: #53dfd3;
      margin-right: 2em;
    }
  
    .topnav .links a:hover {
      color: rgba(255, 255, 255, 1);
      transition: all .3s ease;
    }
  
</style>
