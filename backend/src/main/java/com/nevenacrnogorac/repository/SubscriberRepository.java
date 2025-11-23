package com.nevenacrnogorac.repository;

import com.nevenacrnogorac.entity.Subscriber;
import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;

@JdbcRepository(dialect = Dialect.H2)
public interface SubscriberRepository extends CrudRepository<Subscriber, Long> {
}
