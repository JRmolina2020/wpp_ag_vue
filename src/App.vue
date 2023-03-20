<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#/">
        <img
          src="https://www.pngmart.com/files/7/Cart-PNG-Clipart.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
        />
        MercaG
      </a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#/"
              >Categorias <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/productos">Productos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/clientes">Clientes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/ordenes">Ordenes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/pagos">Pagos</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style></style>
