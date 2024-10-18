package com.example.demo.listeners;

import java.util.Arrays;

import org.hibernate.event.spi.PostInsertEvent;
import org.hibernate.event.spi.PostInsertEventListener;
import org.hibernate.persister.entity.EntityPersister;
import org.springframework.stereotype.Component;

@Component
public class InsertEventListenerClass implements PostInsertEventListener {
  @Override
  public void onPostInsert(PostInsertEvent postInsertEvent) {
    //Subscriber to the insert events on your entities.
    System.out.println("The Event comes here with data: "+ Arrays.toString(postInsertEvent.getState()));
  }

@Override
public boolean requiresPostCommitHandling(EntityPersister persister) {
    // Does this listener require that after transaction hooks be registered?
    // Typically this is true for post-insert event listeners,
    // but may not be, for example,
    // in JPA cases where there are no callbacks defined for the particular entity.
    return true;
}
}
