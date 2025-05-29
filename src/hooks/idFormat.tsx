export const PokemonIdFormat = (id:number) => {
  if (id >= 10) return `00${id}`
  if (id < 10) return `000${id}`
}