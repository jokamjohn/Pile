<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Performance extends Model
{

    /**This year.
     *
     * @param $query
     * @return mixed
     */
    public function scopeThisYear($query)
    {
        return $query->where('created_at', '>=', Carbon::now()->firstOfYear());
    }

    /**
     * @param $query
     * @param $days
     * @return mixed
     */
    public function scopeSpanningDays($query, $days)
    {
        return $query->oldest()->whereDate('created_at', '>=', Carbon::now()->subDays($days));
    }
}
