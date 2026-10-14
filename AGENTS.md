<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Keep public content in TanStack file routes and shared agency layout in the root route so all pages retain navigation and independent metadata.
- Keep verified business content in the shared site-data module; label generated campaign imagery as illustrative rather than presenting it as completed client work.
- Persist public inquiries through a validated server function into a private Cloud table with no visitor read access; owner access is through Cloud Database.
- Define visual roles in the global CSS design system and interactive button treatments in the shared Button variants so styling remains consistent.
