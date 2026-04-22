export default function AdminPage() {

    return (
        <section className="admin-page bg-body-secondary min-vh-100 py-3 py-md-5">
            <div className="container">
                <h1 className="text-center pb-3 pb-md-5">Admin Dashboard</h1>
                <div className="row">
                    <div className="col col-12 col-md-6 mb-4">
                        <div className="card card-body shadow">
                            <h2 className="h5">Manage Movies</h2>
                            <p className="mb-0">Add, edit, or remove movies from the database.</p>
                        </div>
                    </div>
                    <div className="col col-12 col-md-6 mb-4">
                        <div className="card card-body shadow">
                            <h2 className="h5">Manage Reviews</h2>
                            <p className="mb-0">Moderate user reviews and ratings.</p>
                        </div>
                    </div>
                    <div className="col col-12 col-md-6 mb-4">
                        <div className="card card-body shadow">
                            <h2 className="h5">User Management</h2>
                            <p className="mb-0">View and manage registered users.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}