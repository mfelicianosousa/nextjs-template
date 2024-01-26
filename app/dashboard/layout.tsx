import NavLink from "../nav-link";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <div>
                <div className='p-4 border'>
                  <nav className='space-x-4'>
                    <span> <strong>Layout Dashboard:</strong> </span> 
                    <NavLink href="/dashboard/analytics">Analytics</NavLink>  
                    <NavLink href="/dashboard/settings/profile">Profile</NavLink>  
                    <NavLink href="/dashboard/Users">Users</NavLink>  
                  </nav>
                </div>

                <section>
                    {children}
                </section>
            </div>

        </html>
    )
}