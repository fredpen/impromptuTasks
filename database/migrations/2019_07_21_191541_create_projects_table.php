<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;


class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(
            'projects', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->integer('user_id')->index();
                $table->string('model')->index();
                $table->integer('num_of_taskMaster')->index()->nullable()->default(1);
                $table->float('budget')->nullable();
                $table->string('status')->default('created')->nullable(); //created, posted, completed, cancelled
                $table->timestamp('posted_on')->nullable();
                $table->string('start_date')->nullable();
                $table->timestamp('completed_on')->nullable();
                $table->longText('description')->nullable();
                $table->longText('title')->nullable();
                $table->integer('task_id')->nullable();
                $table->integer('sub_task_id')->nullable();
                $table->integer('country_id')->nullable();
                $table->integer('region_id')->nullable();
                $table->integer('city_id')->nullable();
                $table->longText('location')->nullable();
                $table->string('duration')->nullable();
                $table->timestamps();
            }
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
}
