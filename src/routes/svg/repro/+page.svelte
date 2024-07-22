<script>
</script>

<nav>
<a href="#">hover me</a>
</nav>

<style>
  @property --big {
		syntax: "<number>";
		initial-value: 0.4;
		inherits: true;
	}

	a {
    --big: 0.4;
    font-size: calc(var(--big)*10rem);
    color: green;
    transition: --big 0.5s ease-in-out;
    &:hover {
     --big: 1;
     color: blue;
     font-size: calc(var(--big)*10rem);
		}
	}
</style>
