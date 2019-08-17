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
                $table->string('model')->index();
                $table->string('start_date')->nullable();
                $table->string('attachment_url')->nullable();
                $table->longText('description')->nullable();
                $table->integer('task_id');
                $table->integer('sub_task_id');
                $table->integer('country_id')->nullable();
                $table->integer('region_id')->nullable();
                $table->integer('city_id')->nullable();
                $table->longText('location')->nullable();
                $table->string('duration');
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
