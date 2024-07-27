import styled from "styled-components";

// Estilos para la sección de productos
export const StyledProductSection = styled.section`
  margin-top: 40px;

  .products-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 70px;

    @media (min-width: 620px) {
      justify-content: space-between;
      gap: 40px;
    }
  }
`;

// Estilos para el contenedor de filtros
export const FilterContainer = styled.div`
  margin-top: 40px;

  @media (min-width: 1024px) {
    display: flex;
    align-items: start;
    justify-content: space-between;
  }

  .filter {
    @media (min-width: 1320px) {
      display: flex;
      justify-content: space-between;
      height: 50px;
    }

    .dropdown {
      margin-bottom: 24px;

      .filter-by {
        display: flex;
        align-items: center;
        white-space: nowrap;
        p {
          margin-right: 10px;
        }
      }

      .dropdown-categories {
        display: none;
        position: absolute;
        max-width: 256px;
        background-color: ${({ theme }) => theme.colors.neutral__100};
        border: 1px solid ${({ theme }) => theme.colors.neutral__300};
        border-radius: 16px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        z-index: 1;
        width: 100%;
        max-height: 200px;
        overflow-y: auto;
        margin-top: 8px;

        &.show {
          display: block;
        }

        div {
          padding: 12px 16px;
          cursor: pointer;
          transition: background-color 0.3s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.neutral__200};
          }
        }
      }
    }

    .separador {
      display: none;
      margin-right: 20px;
      margin-left: 20px;
      border: 1px solid ${({ theme }) => theme.colors.neutral__300};

      @media (min-width: 1320px) {
        display: block;
      }
    }

    .filter-buttons {
      display: flex;
      align-items: center;
      white-space: nowrap;
      overflow: scroll;

      @media (min-width: 720px) {
        overflow: hidden;
      }
      p {
        margin-right: 10px;
      }
      button {
        margin-right: 10px;
      }
    }
  }
`;

// Estilos para la paginación
export const Pagination = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.neutral__300};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    padding: 10px;
    align-items: center;
  }

  .arrow {
    cursor: pointer;

    svg {
      padding: 10px;
      background: ${({ theme }) => theme.colors.brandLight};
      border-radius: 5px;

      &:hover {
        background: ${({ theme }) => theme.colors.brandLight2};
      }
    }

    &.left {
      svg {
        transform: rotate(-90deg);
      }
    }

    &.right {
      svg {
        transform: rotate(90deg);
      }
    }
  }

  span {
    background: ${({ theme }) => theme.colors.brand};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-right: 10px;
  }

  p {
    margin-left: 10px;
  }

  button {
    border: none;
    background-color: transparent;
    padding: 5px 0;
  }
`;

// Estilos para la paginación móvil
export const PaginationMobile = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.neutral__300};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  max-width: 250px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    display: none;
  }

  .arrow {
    cursor: pointer;

    svg {
      padding: 10px;
      background: ${({ theme }) => theme.colors.brandLight};
      border-radius: 5px;

      &:hover {
        background: ${({ theme }) => theme.colors.brandLight2};
      }
    }

    &.left {
      svg {
        transform: rotate(-90deg);
      }
    }

    &.right {
      svg {
        transform: rotate(90deg);
      }
    }
  }

  button {
    border: none;
    background-color: transparent;
    padding: 5px;
  }

  span {
    background: ${({ theme }) => theme.colors.brand};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-right: 10px;
  }

  p {
    margin-left: 10px;
  }
`;
