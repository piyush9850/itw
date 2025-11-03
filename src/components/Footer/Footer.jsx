
export default function Footer() {
  return (
    <footer className="py-2 px-4 bg-card border-t border-border mt-12 flex flex-wrap justify-between items-center relative">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} PedroTech.co. All rights reserved.
      </p>

    </footer>
  );
}
