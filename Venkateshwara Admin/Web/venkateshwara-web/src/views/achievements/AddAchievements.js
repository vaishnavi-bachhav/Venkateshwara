import React from 'react'

const AddAchievements = () => {
    return (
        <div>
            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card card-success">
                                <div class="card-header">
                                    <h3 class="card-title">Achievements</h3>
                                </div>
                                <form id="quickForm">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Achievement Name</label>
                                            <input type="text" placeholder="Achievement Name " name="text" class="form-control rounded-0" id="exampleInputEmail1" />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Achievement Description</label>
                                            <input type="text" placeholder="Achievement Description" name="text" class="form-control rounded-0" id="exampleInputEmail1" />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Achievement Date</label>
                                            <input type="text" placeholder="Achievement Date" name="text" class="form-control rounded-0" id="exampleInputEmail1" />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Achievement Image</label>
                                            <input type="file" placeholder="Achievement Image" name="text" class=" rounded-0" id="exampleInputEmail1" />
                                        </div>

                                    </div>
                                    <div class="card-footer">
                                        <button type="submit" class="btn btn-success w-100">Upload</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-6">

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AddAchievements
